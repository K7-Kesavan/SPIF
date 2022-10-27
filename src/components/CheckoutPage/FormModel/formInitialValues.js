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
    useAddressForPaymentDetails,
    profession,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [contactNo.name]: '',
  [whatsAppNo.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [profession.name]: '',
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: ''
};
