<<<<<<< HEAD
import { use } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import styled from 'styled-components';
const JoinForm = () => {
  const { t } = useTranslation();
  return (
    <form autoComplete="off">
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <InputBox type="text" />
        </dd>
      </dl>

      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputBox type="password" />
        </dd>
      </dl>

      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <InputBox type="password" />
        </dd>
      </dl>

      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputBox type="text" />
        </dd>
      </dl>

      <div className="terms-agree">
        <FaRegCheckSquare /> {t('회원가입_약관에_동의합니다.')}
      </div>
      <ButtonGroup width={450}>
        <BigButton type="reset" color="light">
          {t('다시입력')}
        </BigButton>
        <BigButton type="submit" color="dark">
          {t('가입하기')}
        </BigButton>
      </ButtonGroup>
    </form>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinForm from '../components/JoinForm';

const JoinForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <h1>{t('회원가입')}</h1>
      <JoinForm />
    </>
>>>>>>> a0549474b3f38f39b1871b57810a193e11bf1019
  );
};

export default React.memo(JoinForm);
