import bcrypt from 'bcrypt';

const EncryptData = (data: string) => {
	return bcrypt.hashSync(data, 10);
};

const CompareEncryptedData = (data: string, encryptedData: string) => {
	return bcrypt.compareSync(data, encryptedData);
};

export default { EncryptData, CompareEncryptedData };
