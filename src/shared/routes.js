import { fetchPopularRepos } from './fetchData';
import ProgressBar from "react-topbar-progress-indicator";
import React, { lazy, Suspense } from "react";
import HomeServerLoad from "../components/Home/Home";
import ProductServerLoad from "../components/Product/Product";
import ExecutionEnvironment from 'exenv';

const lazyLoading = (importFunc, { fallback = null }) => {
    const LazyComponent = lazy(importFunc);
    return props => (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
};

const HomeLazyLoad = lazyLoading(() => import("../components/Home/Home"), {
    fallback: <ProgressBar />
});

const ProductLazyLoad = lazyLoading(() => import("../components/Product/Product"), {
    fallback: <ProgressBar />
});

ProgressBar.config({
    barColors: {
      "0": "grey",
      "1.0": "grey"
    },
});

const Home = ExecutionEnvironment.canUseDOM ? HomeLazyLoad : HomeServerLoad;

const Product = ExecutionEnvironment.canUseDOM ? ProductLazyLoad : ProductServerLoad;

const routes = [
    {
        path: '/',
        component: Home,
        fetchInitialData: () => fetchPopularRepos(),
        name: 'Home'
    },
    {
        path: '/products/:id',
        component: Product,
        name: 'Product'
    },
]

export default routes;