import Swal from 'sweetalert2';

export const showSuccessAlert = (title: string, text: string) => {
  return Swal.fire({
    title,
    text,
    icon: 'success',
    confirmButtonText: 'باشه',
    customClass: {
      popup: 'bg-white p-6 rounded-lg shadow-lg',
      confirmButton: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
    },
    buttonsStyling: false,
  });
};

export const showErrorAlert = (title: string, text: string) => {
  return Swal.fire({
    title,
    text,
    icon: 'error',
    confirmButtonText: 'باشه',
    customClass: {
      popup: 'bg-white p-6 rounded-lg shadow-lg',
      confirmButton: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600',
    },
    buttonsStyling: false,
  });
};



