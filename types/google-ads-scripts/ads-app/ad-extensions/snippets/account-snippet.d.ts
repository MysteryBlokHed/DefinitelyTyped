declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface AccountSnippet extends Snippet {}

        interface AccountSnippetIterator extends Base.Iterator<AccountSnippet> {}

        interface AccountSnippetSelector
            extends
                Base.Selector<AccountSnippetIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit
        {}
    }
}
