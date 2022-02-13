## Nextjs / chakra-UI blogs

- Nextjs
- Chakra-UI
- remark
- github actions

使用 Nextjs 配合 Chakra-UI 建立簡易部落格，利用 github action 部屬在 github pages 上。

--- 

### 客製化樣式
自訂樣式要先了解 Chakra-UI 樣式規則（[這裡](https://chakra-ui.com/docs/theming/customize-theme)），可修改包含主題色、組件樣式、RWD等等，取決於你多了解 Chakra-UI 整個系統。

### 編輯個人資訊
如果你想編輯個人資訊，你可在 `profileData.js` 檔案內修改
，包含Header、Footer、主頁個人資訊


```js
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io5';

export const header = {
  name: 'Name',
  avatarLink:
    'https://cdn.pixabay.com/photo/2022/01/16/15/03/finch-6942278_960_720.jpg',
};

export const footer = {
  email: 'xxxxx@gmail.com',
  socialLink: [
    {
      link: '',
      icon: IoLogoGithub,
    },
    {
      link: '',
      icon: IoLogoTwitter,
    },
  ],
};

export const profile = {
  name: 'Name',
  avatarLink:
    'https://cdn.pixabay.com/photo/2022/01/16/15/03/finch-6942278_960_720.jpg',
  description: 'description',
};
```

### Deployment
部屬前請先開一個 **gh-pages** 的分支（分支內容必須為全空），然後在 `.github/workflows/gh-pages.yaml` 寫上要在哪個分支更新自動部屬（預設為 **blogs**）
```yaml
on:
  push:
    branches:
      - blogs
```

### Next Config
如果你的 github repo 名稱不叫 blogs，請把 `next.config.js` 的 `basePath` **blogs** 換成你的 repo 名稱
```js
const basePath = process.env.NODE_ENV === 'production' ? '/{{Your repo name}}' : '';
```