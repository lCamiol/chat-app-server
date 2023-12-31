
const Message = require('../models/message')

const getChat = async (req, res) => {

    const myId = req.uid;
    const messageFrom = req.params.de

    const last30 = await Message.find({
        $or:[
            {from: myId, to:messageFrom},
            {from: messageFrom, to:myId}
        ]
    })
        .sort({createdAt: 'asc'});

    res.json({
        ok:true,
        messages: last30
    });
}

module.exports ={
    getChat
}