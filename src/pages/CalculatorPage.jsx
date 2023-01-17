import React, {
    // useState,
    // useContext
} from "react";
// import { useSelector } from "react-redux";
import { WeightForm } from "components/CalculatorForm/CalculatorForm";
import { CalculatorPageWrapper, H2, WrapperAll } from "components/CalculatorForm/CalculatorPage.styled";
// import Modal from "components/Modal/Modal";
import { RightSideBar } from "components/RightSideBar/RightSideBar";

const CalculatorPage = () => {
    // const [isModalOpened, setIsModalOpened] = useState(false);
    // const [userParams, setUserParams] = useState(null);

    // const body = document.querySelector('body');

    // const onModalClose = () => {
    //     setIsModalOpened(isModalOpened => !isModalOpened);
    //     body.style.overflow = 'auto';
    // };


    return (
        <WrapperAll>
            <CalculatorPageWrapper>
                {/* {isModalOpened && (
                    <Modal onclose={onModalClose} />
                )} */}
                <div>
                    <H2>Calculate your daily calories intake right now</H2>
                    <WeightForm
                        // initialValues={}
                        // openModal={setIsModalOpened}
                        // setUserParams={ setUserParams}
                    />
                </div>
            </CalculatorPageWrapper>
            <RightSideBar/>
        </WrapperAll>
    )
}

export default CalculatorPage;