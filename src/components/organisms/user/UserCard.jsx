export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://unsplash.com/photos/NE0XGVKTmcA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8ZG9nfGVufDB8fHx8MTY0ODc1NzkwMw&force=true"
        alt="プロフィール"
      />
      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>1111@aaa.com</dd>
        <dt>TEL</dt>
        <dd>000-9999-8888</dd>
        <dt>会社名</dt>
        <dd>ああああ会社</dd>
        <dt>WEB</dt>
        <dd>htttttt.com</dd>
      </dl>
    </div>
  );
};
