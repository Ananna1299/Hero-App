import { toast } from "react-toastify"

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
    if (isDuplicate) return toast.info('Already Installed!', {
      position: 'top-center',
    })
    else{
        const updatedInstalllist = [...installlist, app]
        localStorage.setItem('installItems', JSON.stringify(updatedInstalllist))
        return toast.info('Installation Completed!', {
      position: 'top-center',
    });

    }
    
  } catch (err) {
    console.log(err)
  }
}


export const removeFromInstall = id => {
  const applist = loadlist()
  try {
    const updatedApplist = applist.filter(a => a.id !== id)
    localStorage.setItem('installItems', JSON.stringify(updatedApplist))
  } catch (err) {
    console.log(err)
  }
}
