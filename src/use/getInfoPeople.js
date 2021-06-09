import { useQuery, useResult } from "@vue/apollo-composable";
import getInfoPeopleQuery from "@/graphql/getInfoPeople.query.gql"

export default function getInfoPeople() {
    const {result, loading, error} = useQuery(getInfoPeopleQuery)
    const totalCount = useResult(result, null, data => data.allPeople.totalCount)

    return {
        totalCount,
        loading,
        error
    }

}