import { useQuery, useResult } from "@vue/apollo-composable";
import getFirstFivePeopleQuery from "@/graphql/getFirstFivePeople.query.gql"

export default function getFirstFivePeople() {
    const {result, loading, error} = useQuery(getFirstFivePeopleQuery)
    const firstFive = useResult(result, null, data => data.allPeople.people)

    return {
        firstFive,
        loading,
        error
    }

}