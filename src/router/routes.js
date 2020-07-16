export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '*',
    redirect: '/',
  },
]
