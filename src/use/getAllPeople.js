import { useQuery, useResult } from "@vue/apollo-composable";
import getAllPeopleQuery from "@/graphql/getAllPeople.query.gql"

export default function getAllPeople() {
    const {result, loading, error} = useQuery(getAllPeopleQuery)
    const allPeople = useResult(result, null, data => data.allPeople.people)

    return {
        allPeople,
        loading,
        error
    }

}