import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {Button, Container, FormControlLabel, Radio} from "@material-ui/core"
import {Link} from 'react-router-dom';
import {Checkbox, RadioGroup, TextField} from 'formik-material-ui';
import {ArrowBack} from "@material-ui/icons";
import DialogConfirm from "./DialogConfirm"
import {useDispatch} from "react-redux";
import {addPerson} from "../../redux/actions";

export interface IForm {
    name: string
    surname: string
    birthDate: string
    birthCity: string
    birthCoutry: string
    checked: string,
    superUser: boolean
}

// interface IPropsField {
//     field: object
//     form: object
//     meta: object
// }

const initialValues: IForm = {
    name: "",
    surname: "",
    birthDate: "",
    birthCity: "",
    birthCoutry: "",
    checked: "",
    superUser: false
}

let personResult: IForm = initialValues

const FormProva = () => {

    const dispatch = useDispatch()
    const [openDialog, setDialogOpen] = useState(false)

    const handleClose = () => {
        setDialogOpen(false)
    }
    const handleCloseConfirm = (person: IForm) => {
        // se conferma l'utente, mandare dati al backend
        console.log("backend")
        setDialogOpen(false)

        // assegno a normalizedPerson la persona solo che in checked vado
        // a vedere il valore in string, se è "true" ritorno true in booleano e viceversa
        // person.checked === "true" ritorna true se trova "true" altrimenti false
        const normalizedPerson = {...person, checked: person.checked === "true", superUser: person.superUser}
        console.log("normalizedPerson", normalizedPerson)

        fetch('https://612f5b495fc50700175f159f.mockapi.io/api/users', {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(normalizedPerson)
        }).catch(error => console.log(error))


    }

    const onSubmit = (values: IForm, onSubmitProps: any) => {
        console.log("values", values)
        personResult = values
        console.log("onSubmitProps", onSubmitProps)
        onSubmitProps.setSubmitting(false)
        setDialogOpen(true)
        dispatch(addPerson(values)) // aggiungo la persona allo stato di redux
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        surname: Yup.string().required("Surname is required"),
        birthDate: Yup.string().required("Birth date is required"),
        birthCity: Yup.string().required("Birth city is required"),
        birthCountry: Yup.string().required("Birth country is required"),
        checked: Yup.boolean().required("Checked is required")
    })

    const background = "https://www.sanalitalia.com/wp-content/uploads/2017/03/light-grey-abstract-background-hd-pictures-wallpapers-amagico-grey-background-wallpaper-bedroom-for-walls-homebase-designs-living-room-uk-next-border.jpg"

    return (
        <Container style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "auto",
            maxWidth: "100%", height: "100vh", margin: "0", padding: "1%"
        }}>
            <Link to="">
                <Button variant="outlined" color="primary"> <ArrowBack/> </Button>
            </Link>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount // carica subito gli errori required
            >
                {formik => {
                    console.log("formik", formik)
                    return (
                        <Form>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column"
                            }}>
                                <label style={{fontWeight: 650}}>Name</label>
                                <Field placeholder="Name"
                                       id="name"
                                       name="name"
                                       component={TextField}
                                />
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                marginTop: "1%"
                            }}>
                                <label style={{fontWeight: 650}}>Surname</label>
                                <Field placeholder="Surname"
                                       id="surname"
                                       name="surname"
                                       component={TextField}
                                />
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                marginTop: "1%"
                            }}>
                                <label style={{fontWeight: 650}}>Birth date</label>
                                <Field placeholder="Birth date"
                                       id="birthDate"
                                       name="birthDate"
                                       component={TextField}
                                />
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                marginTop: "1%"
                            }}>
                                <label style={{fontWeight: 650}}>Birth city</label>
                                <Field placeholder="Birth city"
                                       id="birthCity"
                                       name="birthCity"
                                       component={TextField}
                                />

                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    marginTop: "1%"
                                }}>
                                    <label style={{fontWeight: 650}}>Birth country</label>
                                    <Field placeholder="Birth country"
                                           id="birthCountry"
                                           name="birthCountry"
                                           component={TextField}
                                    />
                                </div>

                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    marginTop: "1%"
                                }}>
                                    <label style={{fontWeight: 650}}>Checked or Unchecked?</label>
                                    <Field component={RadioGroup} name="checked">
                                        <FormControlLabel
                                            value="true"
                                            control={<Radio/>}
                                            label="Checked"
                                        />
                                        <FormControlLabel
                                            value="false"
                                            control={<Radio/>}
                                            label="Unchecked"
                                        />
                                    </Field>

                                </div>

                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    marginTop: "1%"
                                }}>
                                    <label style={{fontWeight: 650}}>SuperUser?</label>
                                    <Field type="checkbox" id="superUser"
                                           name="superUser"
                                           component={Checkbox}
                                    />
                                </div>

                                <Button variant="outlined" type="submit"
                                        disabled={!formik.isValid || formik.isSubmitting}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            <DialogConfirm results={personResult} open={openDialog} handleClose={handleClose}
                           handleCloseConfirm={handleCloseConfirm}/>

            {/*<div style={{*/}
            {/*    display: "flex",*/}
            {/*    alignItems: "center",*/}
            {/*    justifyContent: "center",*/}
            {/*    flexDirection: "column"*/}
            {/*}}>*/}
            {/*    <label style={{fontWeight: 650}}>Phone numbers</label>*/}
            {/*    <FieldArray name="phNumbers">*/}
            {/*        {(fieldArrayProps: any) => {*/}
            {/*            console.log(fieldArrayProps)*/}
            {/*            // prendo i campi push, remove e form dalle props*/}
            {/*            const {push, remove, form} = fieldArrayProps*/}
            {/*            const {values} = form*/}
            {/*            const {phNumbers} = values*/}
            {/*            return (*/}
            {/*                <div>*/}
            {/*                    /!*per ogni numero di telefono visualizzo un campo field*!/*/}
            {/*                    {phNumbers.map((phNumber: string, index: number) => (*/}
            {/*                        <div key={index}>*/}
            {/*                            <Field name={`phNumbers[${index}]`}/>*/}
            {/*                            /!*il bottone meno toglie il campo, il + lo aggiunge*!/*/}
            {/*                            {index > 0 &&*/}
            {/*                            <button onClick={() => remove(index)}> - </button>}*/}
            {/*                            <button onClick={() => push("")}> +</button>*/}
            {/*                        </div>*/}
            {/*                    ))}*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        }}*/}
            {/*    </FieldArray>*/}
            {/*</div>*/}
        </Container>
    );
};

export default FormProva;
