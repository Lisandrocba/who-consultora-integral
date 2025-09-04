"use client"

import { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useI18n } from "@/hooks/use-i18n"

export function ContactSection() {
  const { t } = useI18n()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('campoRequerido'),
    email: Yup.string()
      .email('emailValido')
      .required('campoRequerido'),
    subject: Yup.string().required('campoRequerido'),
    message: Yup.string().required('campoRequerido'),
  })

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  interface ContactFormValues {
    name: string
    email: string
    subject: string
    message: string
  }

  interface FormikHelpers {
    setSubmitting: (isSubmitting: boolean) => void
    resetForm: () => void
  }

  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm }: FormikHelpers
  ): Promise<void> => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!res.ok) throw new Error('Error en el envío')

      setShowSuccessModal(true)
      resetForm()
    } catch (err) {
      console.log(err)
      setShowErrorModal(true)
    } finally {
      setSubmitting(false)
    }
  }

  const closeSuccessModal = () => setShowSuccessModal(false)
  const closeErrorModal = () => setShowErrorModal(false)

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("contactTitle")}</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t("nameLabel")}
                          </label>
                          <Field name="name">
                            {({ field, meta }: { field: import('formik').FieldInputProps<string>, meta: import('formik').FieldMetaProps<string> }) => (
                                <div>
                                  <Input 
                                    {...field} 
                                    type="text" 
                                    className={`w-full ${meta.touched && meta.error ? 'border-red-500' : ''}`}
                                    placeholder={t("nameLabel")} 
                                  />
                                  {meta.touched && meta.error && (
                                     <div className="text-red-500 text-sm mt-1">
                                        {meta.error === "campoRequerido" ? t("campoRequerido") : meta.error}
                                      </div>
                                  )}
                                </div>
                              )}
                          </Field>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t("emailLabel")}
                          </label>
                          <Field name="email">
                            {({ field, meta }: { field: import('formik').FieldInputProps<string>, meta: import('formik').FieldMetaProps<string> }) => (
                              <div>
                                <Input 
                                  {...field} 
                                  type="email" 
                                  className={`w-full ${meta.touched && meta.error ? 'border-red-500' : ''}`}
                                  placeholder={t("emailLabel")} 
                                />
                                {meta.touched && meta.error && (
                                   <div className="text-red-500 text-sm mt-1">
                                  {meta.error === "campoRequerido" ? t("campoRequerido") : t("emailValido")}
                                </div>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("subjectLabel")}
                        </label>
                        <Field name="subject">
                          {({ field, meta }: { field: import('formik').FieldInputProps<string>, meta: import('formik').FieldMetaProps<string> }) => (
                            <div>
                              <Input 
                                {...field} 
                                type="text" 
                                className={`w-full ${meta.touched && meta.error ? 'border-red-500' : ''}`}
                                placeholder={t("subjectLabel")} 
                              />
                              {meta.touched && meta.error && (
                                 <div className="text-red-500 text-sm mt-1">
                                  {meta.error === "campoRequerido" ? t("campoRequerido") : meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("messageLabel")}
                        </label>
                        <Field name="message">
                          {({ field, meta }: { field: import('formik').FieldInputProps<string>, meta: import('formik').FieldMetaProps<string> }) => (
                            <div>
                              <Textarea 
                                {...field} 
                                rows={6} 
                                className={`w-full ${meta.touched && meta.error ? 'border-red-500' : ''}`}
                                placeholder={t("messageLabel")} 
                              />
                              {meta.touched && meta.error && (
                                <div className="text-red-500 text-sm mt-1">
                                  {meta.error === "campoRequerido" ? t("campoRequerido") : meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <div className="text-center">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="bg-brand-dark hover:bg-brand-dark/90 text-white px-12 py-3 disabled:opacity-50"
                        >
                          {isSubmitting ? 'Enviando...' : t("sendButton")}
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal de éxito */}
      {showSuccessModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4'>
            <div className='text-center'>
              <div className='mb-4'>
                <svg className='mx-auto h-12 w-12 text-green-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>
                {t("msjSucces")}
              </h3>
              <p className='text-gray-600 mb-4'>
                {t("msjSucces2")}
              </p>
              <button
                onClick={closeSuccessModal}
                className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors'
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de error */}
      {showErrorModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4'>
            <div className='text-center'>
              <div className='mb-4'>
                <svg className='mx-auto h-12 w-12 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>
                Error al enviar el mensaje
              </h3>
              <p className='text-gray-600 mb-4'>
                Hubo un problema al enviar tu mensaje. Por favor, inténtalo más tarde.
              </p>
              <button
                onClick={closeErrorModal}
                className='bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors'
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}