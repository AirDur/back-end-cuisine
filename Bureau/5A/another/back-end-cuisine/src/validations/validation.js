class Validation {
    constructor(server) {
        this.server = server;
    }

    verifyProperty(data, property, fields, fieldInstances) {
        if (!data.hasOwnProperty(property)) {
            throw new Error(property);
        } 
        try {
            for (var field in fields) {
                this.verifyTypeOf(data[property][fields[field]], fieldInstances[field], fields[field]);
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }
    
    verifyTypeOf(fieldToVerify, theoricTypeOfField, fieldName) {
        if (typeof fieldToVerify !== theoricTypeOfField) {
            throw new Error(fieldName);
        }
    }

    verifyInstanceOf(fieldToVerify, theoricInstanceOfField, fieldName) {
        if (!(fieldToVerify instanceof theoricInstanceOfField)) {
            throw new Error(fieldName);
        }
    }

    async verifyIdExistsInDB(id, model, errorMessage) {
        let query = { _id: id };
        let result = await model.readOne(query);

        if (result === null) {
            throw new Error(errorMessage);
        }

        return true;
    }
};

module.exports = Validation;