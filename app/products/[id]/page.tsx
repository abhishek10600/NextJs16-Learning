const Product = async ({params}: {params: Promise<{id: string}>;}) => {
    const {id} = await params;
  return (
    <div>This is product with id: {id} </div>
  )
}

export default Product