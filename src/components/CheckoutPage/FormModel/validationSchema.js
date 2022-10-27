import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    address1,
    city,
    contactNo,
    whatsAppNo,
    zipcode,
    country,
    profession,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string().email('Email is not valid').required(`${email.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [contactNo.name]: Yup.string()
      .required(`${contactNo.requiredErrorMsg}`)
      .test(
        'len',
        `${contactNo.invalidErrorMsg}`,
        val => val && val.length === 13
      ),
    [whatsAppNo.name]: Yup.string()
      .required(`${whatsAppNo.requiredErrorMsg}`)
      .test(
        'len',
        `${whatsAppNo.invalidErrorMsg}`,
        val => val && val.length === 13
      ),
    [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        'len',
        `${zipcode.invalidErrorMsg}`,
        val => val && val.length === 6
      ),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [profession.name]: Yup.string()
      .nullable()
      .required(`${profession.requiredErrorMsg}`),
    [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: Yup.string()
      .required(`${cardNumber.requiredErrorMsg}`)
      .matches(visaRegEx, cardNumber.invalidErrorMsg),
    [expiryDate.name]: Yup.string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test('expDate', expiryDate.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [cvv.name]: Yup.string()
      .required(`${cvv.requiredErrorMsg}`)
      .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
