import { h, render } from 'preact';
import 'file-loader?name=[name].[ext]!web-app-manifest-loader!./manifest.json';
import './shell.scss'
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}
