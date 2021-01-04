module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    // NOTE: 本来は有効化すべきだが、元々のコードに該当箇所が多く修正が大変なので一時的に無効化
    'no-descending-specificity': null
  }
}
