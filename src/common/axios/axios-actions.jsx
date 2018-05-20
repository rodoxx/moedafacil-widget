import axios from 'axios'
import consts from '../../config/consts'

export async function getEcommerceInfos (ecommerce){

    let data = {}

    axios.get(`${consts.API_URL}/store/all?user=${ecommerce}`)
        .then(
            function (resp){
                console.log('resp', resp)
                data = resp.data
            },
            function (e) {
                //dispatch(axiosResponse(e))
            })

}
