import { useQuery, useResult } from "@vue/apollo-composable";
import getFivePeopleQuery from "@/graphql/getFivePeople.query.gql"

export default function getFivePeople(cursor = "") {
    //get the next five people, if the cursor is empty get the first five people
    const { result, loading, error } = useQuery(getFivePeopleQuery, { cursor: cursor })
    const hasNextPage = useResult(result, null, data => data.allPeople.pageInfo.hasNextPage)
    const dataPeople = useResult(result, null, data =>
        data.allPeople.edges
    )

    return {
        loading,
        error,
        hasNextPage,
        dataPeople
    }

}