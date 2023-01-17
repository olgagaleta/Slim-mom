import plus from '../../../icons/plus.svg';
import {
  DiaryForm,
  DiaryFormProductStyled,
  DiaryFormGramsStyled,
  DiaryFormProductConteinerStyled,
  DiaryFormGramsConteinerStyled,
  DiaryFormButton,
  DiaryProductsPlusStyled,
  DiaryFormProductLabelStyled,
} from './DiaryAddProductForm.styled';

export default function DiaryAddProductForm() {
  return (
    // <>
    //   <form>
    //     <input type="text" />
    //     <input type="text" />
    //     <button type="submit" style={{ padding: '15px' }}>
    //       +
    //     </button>
    //   </form>
    //   </>
    // <>

    <>
      <DiaryForm>
        <DiaryFormProductConteinerStyled>
          <DiaryFormProductStyled placeholder="Enter product name" />
          <DiaryFormProductLabelStyled htmlFor="product"></DiaryFormProductLabelStyled>
        </DiaryFormProductConteinerStyled>
        <DiaryFormGramsConteinerStyled>
          <DiaryFormGramsStyled placeholder="Grams" />
        </DiaryFormGramsConteinerStyled>
        <DiaryFormButton>
          <DiaryProductsPlusStyled src={plus} alt="plus" />
        </DiaryFormButton>
      </DiaryForm>
    </>
  );
}
