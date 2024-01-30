const fetchdata = () =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            const data = 'some data';
            resolve(data);
            reject ('Error fetching data');
        },2000);
    
    });
};

fetchdata()
    .then(data => console.log(data))
    .catch(error => console.error(error));