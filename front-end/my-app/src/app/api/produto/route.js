const GETALL = async () => {
    const res = await fetch('https://localhost:3000/comprador/allitems', {
      headers: {
        'Content-Type': 'application/json',
        //'API-Key': process.env.DATA_API_KEY,
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }

  const GETID = async (id) => {
    const res = await fetch(`https://localhost:3000/comprador/finditem/?${id}`, {
      headers: {
        'Content-Type': 'application/json',
        //'API-Key': process.env.DATA_API_KEY,
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }

  export {GETALL, GETID};