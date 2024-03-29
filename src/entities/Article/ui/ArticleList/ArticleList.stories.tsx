import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { type Article, ArticleBlockType, ArticleView } from '../../model/types/article'
import { ArticleList } from './ArticleList'
import ImageStorybook from '@/shared/assets/images/storybook.png'

const article: Article = {
  id: '1',
  title: '55e1d6464b57ac14f1dc8460962e33791c3ad6e04e507440722d72d5924ec7_640',
  subtitle: 'new js 2023',
  user: {
    avatar: ImageStorybook,
    id: '1',
    username: 'admin',
  },
  image: ImageStorybook,
  views: 1022,
  createdAt: '26.06.2023',
  type: [],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        // eslint-disable-next-line max-len
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        // eslint-disable-next-line max-len
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        // eslint-disable-next-line max-len
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
} satisfies Article

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
} satisfies ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> =
  (args) => <ArticleList {...args} />

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  articles: new Array(16).fill(0).map((_, i) => article),
}

export const PrimaryBig = Template.bind({})
PrimaryBig.args = {
  articles: new Array(16).fill(0).map((_, i) => article),
  view: ArticleView.BIG,
}

export const LoadSmall = Template.bind({})
LoadSmall.args = {
  isLoading: true,
  articles: [],
}

export const LoadBig = Template.bind({})
LoadBig.args = {
  isLoading: true,
  view: ArticleView.BIG,
  articles: [],
}
