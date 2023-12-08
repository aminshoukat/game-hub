import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {

    return (
        <Card width={{ lg: '400px', md: '100px' }} overflow="hidden" borderRadius={10}>
            <Skeleton height='300px' />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )

}
export default GameCardSkeleton;