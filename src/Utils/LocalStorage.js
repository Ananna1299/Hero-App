// get
export const loadlist = () => {
  try {
    const data = localStorage.getItem('installItems')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = app => {
  const installlist = loadlist()

  try {
    const isDuplicate = installlist.some(a => a.id === app.id)
    if (isDuplicate) return isDuplicate
    else{
        const updatedInstalllist = [...installlist, app]
        localStorage.setItem('installItems', JSON.stringify(updatedInstalllist))
        return isDuplicate;

    }
    
  } catch (err) {
    console.log(err)
  }
}

// delete
// export const removeFromWishlist = id => {
//   const wishlist = loadWishlist()
//   try {
//     const updatedWishlist = wishlist.filter(p => p.id !== id)
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
//   } catch (err) {
//     console.log(err)
//   }
// }
