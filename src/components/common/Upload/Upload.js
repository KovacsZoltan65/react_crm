import { Upload as AntdUpload, UploadProps } from 'antd';
import * as S from './Upload.styles';

export const { Dragger: UploadDragger } = AntdUpload;

export const Upload = (props) => {
    return <S.Upload {...props} />;
};