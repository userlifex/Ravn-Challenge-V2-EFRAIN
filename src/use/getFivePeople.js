import { useQuery, useResult } from "@vue/apollo-composable";
import getFivePeopleQuery from "@/graphql/getFivePeople.query.gql"

export default function getFivePeople(cursor = "") {
    // console.log(cursor)
    const { result, loading, error } = useQuery(getFivePeopleQuery, { cursor: cursor })
    // const firstFive = useResult(result, null, data => data.allPeople.people)
    const hasNextPage = useResult(result, null, data => data.allPeople.pageInfo.hasNextPage)
    const dataPeople = useResult(result, null, data =>
        data.allPeople.edges
    )

    // console.log("metodo", hasNextPage)

    
    return {
        loading,
        error,
        hasNextPage,
        dataPeople
    }

}