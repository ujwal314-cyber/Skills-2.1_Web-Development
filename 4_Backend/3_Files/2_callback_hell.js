fs.writeFile("file2.txt", "Hello world", () => {
    console.log("Done")
    fs.readFile("file2.txt", (error, data) => {
        console.log(error)
        console.log(data.toString());
        fs.writeFile("file2.txt", "Hello world", () => {
            console.log("Done")
            fs.readFile("file2.txt", (error, data) => {
                console.log(error)
                console.log(data.toString());
                fs.writeFile("file2.txt", "Hello world", () => {
                    console.log("Done")
                    fs.readFile("file2.txt", (error, data) => {
                        console.log(error)
                        console.log(data.toString());
                        fs.writeFile("file2.txt", "Hello world", () => {
                            console.log("Done")
                            fs.readFile("file2.txt", (error, data) => {
                                console.log(error)
                                console.log(data.toString());
                                fs.writeFile("file2.txt", "Hello world", () => {
                                    console.log("Done")
                                    fs.readFile("file2.txt", (error, data) => {
                                        console.log(error)
                                        console.log(data.toString());
                                        fs.writeFile("file2.txt", "Hello world", () => {
                                            console.log("Done")
                                            fs.readFile("file2.txt", (error, data) => {
                                                console.log(error)
                                                console.log(data.toString());
                                                fs.writeFile("file2.txt", "Hello world", () => {
                                                    console.log("Done")
                                                    fs.readFile("file2.txt", (error, data) => {
                                                        console.log(error)
                                                        console.log(data.toString());
                                                        fs.writeFile("file2.txt", "Hello world", () => {
                                                            console.log("Done")
                                                            fs.readFile("file2.txt", (error, data) => {
                                                                console.log(error)
                                                                console.log(data.toString());
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

//to escape from this hell use fs/promises