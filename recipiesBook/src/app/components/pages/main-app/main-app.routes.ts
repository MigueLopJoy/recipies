import { Routes } from '@angular/router';

export const MAIN_APP_ROUTES: Routes = [
        {
            path: '',
            loadComponent: () => import('./main-app.component').then(c => c.MainAppComponent),
            children: [
                {
                    path: 'explore', 
                    loadComponent: () => import('./explore/explore.component').then(c => c.ExploreComponent)
                },
                {
                    path: 'profile', 
                    loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent)
                },
                {
                    path: 'create-recipie',
                    loadComponent: () => import('./create-recipie/create-recipie.component').then(c => c.CreateRecipieComponent)
                },
                {
                    path: 'edit-recipie',
                    loadComponent: () => import('./edit-recipie/edit-recipie.component').then(c => c.EditRecipieComponent)
                },
                {
                    path: 'edit-profile', 
                    loadComponent: () => import('./edit-profile/edit-profile.component').then(c => c.EditProfileComponent)
                },
                {
                    path: 'recipie/:id', 
                    loadComponent: () => import('./recipie-details/recipie-details.component').then(c => c.RecipieDetailsComponent)
                }
            ]
        }
];
