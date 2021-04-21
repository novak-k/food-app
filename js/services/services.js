const postData = async (url, data) => {     //меняем асинхронность выполнения async/await
    const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: data
});
return await res.json();
};

const getResource = async (url) => {     //меняем асинхронность выполнения async/await
    const res = await fetch(url);
        if (!res.ok) {          //прописали руками ошибки на которые не реагирует фетч
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    return await res.json();
};

// async function getResource(url) {
//     let res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     return await res.json();
// }

export {postData};
export {getResource}; 