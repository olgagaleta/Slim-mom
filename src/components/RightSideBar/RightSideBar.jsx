import { Wrapper, SummaryWrap, FoodWrap, Title, Item, Text, RedText } from "./RightSideBar.styled"


export const RightSideBar = () => {
    
    return (
        <Wrapper>
            <SummaryWrap>
                <Title>Summary for</Title>
                <ul>
                    <Item>
                        <Text>Left</Text>

                        <RedText> kcal</RedText>
                        <Text> kcal</Text>

                    </Item>
                    <Item>
                        <Text>Consumed</Text>
                        <Text> kcal</Text>
                    </Item>
                    <Item>
                        <Text>Daily rate</Text>
                        <Text> kcal</Text>
                    </Item>
                    <Item>
                        <Text>n% of normal</Text>

                        <RedText> %</RedText>
                        <Text> %</Text>

                    </Item>
                </ul>
            </SummaryWrap>
            <FoodWrap>
                <Title>Food not recommended</Title>

                <ul>
                    <Text> xxxx </Text>
                </ul>
                <Text>Your diet will be displayed here</Text>
            </FoodWrap>
        </Wrapper>
    )
};