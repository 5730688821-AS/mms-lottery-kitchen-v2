import axios from 'axios';

export function update(value){
    return {
        type: 'UPDATE',
        payload: {
            value: value,
        }
    }
}

export function submit(search,value,url){
    return {
        type: 'SUBMIT',
        payload: {
            search: search,
            value: value,
            url: url,
        }
    }
}

export function reset(){
    return {
        type: 'RESET',
    }
}

export function click(search,url){
    return {
        type: 'CLICK',
        payload: {
            search: search,
            url: url,
        }
    }
}

export async function fetch(url){
    const res = await axios.get(url).catch(err => {
        console.log(err)
    })
    return {
        type: 'FETCH',
        payload: {
            data: res.data,
        }
    }
}