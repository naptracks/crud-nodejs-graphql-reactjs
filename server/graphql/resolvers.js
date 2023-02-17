import fs from "fs/promises";

const getDataFrom = async (path) => JSON.parse(await fs.readFile(path, "utf-8"))
const findById = (data, id) => data.find(data => data.id === id)

//Resolvers
export default {


        //QUERIES
        astronauts: async () => {
            try {
                return await getDataFrom("data.json")
               
            } catch (error) {
                throw error
            }
        },
    
        astronaut: async ({id}) => {
            try {
                const astronauts = await getDataFrom("data.json")
                return findById(astronauts, id)
            }  catch (error) {
                throw error
            }
        },

   
 
        //MUTATIONS
        addAstronaut: async ({name}) => {
            try {

                const astronauts = await getDataFrom("data.json")
                const newAstronaut = {
                    id: astronauts.length + 1,
                    name,
                    isInSpace: false
                }
                astronauts.push(newAstronaut)
                await fs.writeFile("data.json", JSON.stringify(astronauts)) 
                return newAstronaut
            } 
            catch (error ) {
                throw error
            } 
        },

        updateAstronaut: async ({id, name, isInSpace}) => {
            try {
                const astronauts = await getDataFrom("data.json")
                const target = findById(astronauts, id)

                target.name = name;
                target.isInSpace = isInSpace

                await fs.writeFile("data.json", JSON.stringify(astronauts))

                return target
            } 
            catch (error) {
                throw error
            }
        },

        deleteAstronaut: async({id}) => {
            try {
                const astronauts = await getDataFrom("data.json")
                const target = findById(astronauts, id)
                const filteredAstronauts = astronauts.filter(a => a.id !== id)

                await fs.writeFile("data.json", JSON.stringify(filteredAstronauts))
                return target

            } 
            catch (error) {
                throw error
            }
        }  

}

