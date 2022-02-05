const Historydb = require('../model/history_model');

//first API new request - create and save
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    //new search-history
    const history = new Historydb({
        place: req.body.place,
        date: req.body.date
    })

    //save data in the database
    history
    .save(history)
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred with create operation"
        })
    })

}

//retrieve and return all data / retrieve and return a single data element
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Historydb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({ message: `Not found data with id ${id}` })
                }else{
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: `Error retrieving data with id ${id}`})
            })

    }else{
        Historydb.find()
            .then(history => {
                res.send(history)
            })
            .catch(err => {
                res.status(500).send({message:err.message || "An ERROR occurred while retrieving data information"})
            })
    }
}

//Delete data with specified id
exports.delete = (req, res) => {
    const id = req.params.id;
    Historydb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: `Cannot delete data with id ${id}. Maybe id is wrong!`})
            }else{
                res.send({message: "Data was deleted successfully!"})
            }
        })
        .catch(err => {
            res.status(500).send({message: `Could not delete data with id = ${id}`});
        });
}