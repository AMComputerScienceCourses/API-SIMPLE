import * as Yup from 'yup';

const MIN_LENGTH = {
  name: 2,
  city: 1,
  country: 2
}

const MAX_LENGTH = {
  name: 20,
  city: 30,
  country: 30,
}

export const userSchema = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
        email: Yup.string().email(),
        city: Yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        country: Yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
      }),
    },
  },
}

export const getUser = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number().required(),
      }),
    },
  },
}

export const updateSchema = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number().required(),
      }),
    },
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH),
        email: Yup.string().email(),
        city: Yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        country: Yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
      }),
    },
  },
}

export const removeUser = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number().required(),
      }),
    },
  },
}