import iziToast from "izitoast";

iziToast.settings({
  timeout: 6000,
  resetOnHover: true,
  progressBar: false,
});

export const success = ({ title, message }) => {
  iziToast.success({
    title,
    message,
  });
};

export const error = ({ title, message }) => {
  iziToast.error({
    title,
    message,
  });
};
