import { useQuery, useResult } from "@vue/apollo-composable";
import getDataPersonQuery from "@/graphql/getDataPerson.query.gql"

export default function getDataPerson(id) {
    // get the data to show of the person with the id 
    const { result, loading, error } = useQuery(getDataPersonQuery, { personId: id })

    const person = useResult(result, null, data => data.person)
    return {
        person,
        loading,
        error
    }

}