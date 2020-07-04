

class Cluster {
    index(req, res, next){
        return res.json({clusters:''})
    }
}

module.exports = Cluster