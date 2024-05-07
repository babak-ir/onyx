'use client';

import { useChangeLocale, useCurrentLocale } from '../../locales/client';

export function SwitchLocal() {

    // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
    const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

    const local = useCurrentLocale();

    const changeLocaleHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {

        switch (event.target.value) {
            case 'en':
                changeLocale('en');
                break;
            case 'fa':
                changeLocale('fa');
                break;
            default:
                changeLocale('en')
                break;
        }

    }

    return (
        <>
            <form className="">
                <select id="countries" value={local} onChange={changeLocaleHandler} className="bg-quaternary border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-24 p-2">
                    <option value='en' className="inline-flex items-center justify-between">
                        🇺🇸   En
                    </option>
                    <option value='fa' className="inline-flex items-center justify-between">
                        🇮🇷   Fa
                    </option>
                </select>
            </form>
        </>
    );
}
