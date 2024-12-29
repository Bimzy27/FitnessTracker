import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('src/pages/PageProfile.vue') },
            {
                path: 'workouts',
                component: () => import('src/pages/PageWorkouts.vue'),
            },
            {
                path: 'workouts/new',
                component: () => import('src/pages/PageNewWorkout.vue'),
            },
            {
                path: 'exercises',
                component: () => import('src/pages/PageExercises.vue'),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
