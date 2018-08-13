const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
	// const emailsArray = emails.split(',').map(email => email.trim());
	const inValidEmails = emails
		.trim()
		.split(/\s*,{1}\s*/)
		.filter(email => !emailRegex.test(email));

	if (inValidEmails.length) {
		return `This emails were invalid: ${inValidEmails}`;
	}
	return;
};
