import mongoose from 'mongoose'

const pedidoSchema = mongoose.Schema ({
    produto: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    }
})

export default mongoose.model("Pedido", pedidoSchema);