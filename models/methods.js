const db = reuqire('./conn');
class Method {
    static getAll(){
        return db.any(`select * from methods`)
        .then((arrayOfMethods)=> {
            return arrayOfMethods.map((methodData) => {
                const aMethod = new Method (
                    methodData.id,
                    methodData.name,
                    methodData.code
                );
                return aMethod;
            })
        })
    }
    static getById(id) {
        return db.one(`select * from methods where id=${id}`)
        .then((methodData) =>{
            const methodInstance = new Method (
                methodData.id,
                methodData.name,
                methodData.code
            );
            return methodInstance;
        })
        .catch(() => {
            return null;
        })
    }
}