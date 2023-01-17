import React from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import {
  ButtonForm,
  ButtonWrapper,
  Checkbox,
  CheckboxContainer,
  Error,
  Input,
  Label,
  List,
  Paragraph,
} from './CalculatorForm.styled';

const schema = yup.object().shape({
  height: yup
    .number('Height is use only number')
    .min(100, 'Please enter a number more than or equal to 100')
    .max(250, 'Please enter a number less than or equal to 250')
    .integer('Height must be a integer number')
    .typeError('Height must be a number')
    .required('Height is required field'),
  age: yup
    .number('Age is use only number')
    .min(18, 'Please enter a number more than or equal to 18')
    .max(100, 'Please enter a number less than or equal to 100')
    .typeError('Age must be a number')
    .required('Age is required field')
    .integer('Age must be a integer number'),
  currentWeight: yup
    .number('Current weight is use only number')
    .min(20, 'Please enter a number more than or equal to 20')
    .max(500, 'Please enter a number less than or equal to 500')
    .typeError('Current weight must be a number')
    .required('Current weight is required field')
    .integer('Current weight must be a integer number'),
  desiredWeight: yup
    .number('Desired weight is use only number')
    .min(20, 'Please enter a number more than or equal to 20')
    .max(500, 'Please enter a number less than or equal to 500')
    .typeError('Desired weight must be a number')
    .required('Desired weight is required field')
    .integer('Desired weight must be a integer number'),
  bloodType: yup.string().required(),
});

export const WeightForm = ({ openModal, initialValues}) => {

    const startValues = {
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '1',
    };

  return (
    <div>
          <Formik
              initialValues={initialValues ? initialValues : startValues}
              validationSchema={ schema} >
        <Form>
          <List>
            <li>
              <label>
                <Input type="height" name="height" placeholder="Height, cm *" />
                <ErrorMessage name="height" component={Error} />
              </label>
                      </li>
                      
            <li>
              <label>
                <Input type="age" name="age" placeholder="Age *" />
                <ErrorMessage name="height" component={Error} />
              </label>
                      </li>
                      
                      <li>
                          <label>
                              <Input
                                  type="currentWeight"
                                  name="currentWeight"
                                  placeholder="Current weight, kg *"
                              />
                              <ErrorMessage name="currentWeight" component={Error} />
                          </label>
                      </li>

                      <li>
                          <label>
                              <Input
                                  type="desiredWeight"
                                  name="desiredWeight"
                                  placeholder="Desired weight, kg *"
                              />
                              <ErrorMessage name="desiredWeight" component={Error} ></ErrorMessage>
                          </label>
                      </li>

                      <li>
                          <Paragraph>Blood type *</Paragraph>
                          <CheckboxContainer>
                              <Label>
                                  <Checkbox type="radio" name="bloodType" value="1" />1
                              </Label>
                             <Label>
                                  <Checkbox type="radio" name="bloodType" value="2" />2
                              </Label>
                              <Label>
                                  <Checkbox type="radio" name="bloodType" value="3" />3
                              </Label>
                              <Label>
                                  <Checkbox type="radio" name="bloodType" value="4" />4
                              </Label>
                          </CheckboxContainer>
                      </li>
                  </List>
                  <ButtonWrapper disabled={ !initialValues} >
                      <ButtonForm type="submit" >Start losing weight</ButtonForm>
                  </ButtonWrapper>
        </Form>
      </Formik>
    </div>
  );
};
