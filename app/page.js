"use client";
import { Field, Form, Formik } from "formik";

const questionsArray = [
  {
    code: "1",
    question: "Something",
  },
  {
    code: "2",
    question: "Something Else",
  },
];

export default function Home() {
  const questionsObject = questionsArray.reduce((acc, question) => {
    acc[question.code] = "";
    return acc;
  }, {});

  console.log(questionsObject);

  return (
    <main className="min-h-screen p-24 m-2">
      <h1 className="font-3xl l">Example of yes or no question</h1>
      <Formik
        initialValues={questionsObject}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, errors, touched, isSubmitting, dirty, isValid }) => (
          <>
            <Form className="mt-5 ">
              <div className="bg-slate-800 rounded-md p-3">
                {questionsArray.map((question) => {
                  return (
                    <div key={question.code}>
                      <div id="my-radio-group">{question.question}</div>
                      <div
                        role="group"
                        aria-labelledby="my-radio-group"
                        className="flex gap-4 "
                      >
                        <label>
                          <Field
                            type="radio"
                            name={question.code}
                            value="yes"
                            className="mr-1"
                          />
                          Yes
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name={question.code}
                            value="no"
                            className="mr-1"
                          />
                          No
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                type="submit"
                className="bg-slate-800 p-2 rounded-md mt-2 hover:bg-slate-400"
              >
                Submit
              </button>
            </Form>
            <div className="mt-12 mb-40">
              <p className="mb-4">The state of our form</p>
              <pre className=" p-5 bg-slate-600 rounded-md">
                {JSON.stringify(
                  { values, errors, touched, isSubmitting, dirty, isValid },
                  null,
                  4
                )}
              </pre>
            </div>
          </>
        )}
      </Formik>
    </main>
  );
}
