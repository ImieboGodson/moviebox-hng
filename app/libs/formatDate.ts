
const formatDate = (dateString: string) => {
    if (!dateString) {
      return;
    }

    const date = new Date(dateString);

    return date.getUTCFullYear();
};

export default formatDate;