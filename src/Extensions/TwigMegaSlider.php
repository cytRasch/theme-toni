<?php

namespace CeresVanilla\Extensions;

use IO\Services\ItemService;
use Plenty\Plugin\ConfigRepository;
use Plenty\Plugin\Templates\Extensions\Twig_Extension;
use Plenty\Plugin\Templates\Factories\TwigFactory;

/**
 * Class TwigMegaSlider
 *
 * @package CeresVanilla\Extensions
 */
class TwigMegaSlider extends Twig_Extension
{

    CONST NAME_SPACE = "CeresVanilla";

    /**
     * @var \Plenty\Plugin\Templates\Factories\TwigFactory
     */
    private $twig;

    /**
     * @var \Plenty\Plugin\ConfigRepository
     */
    private $config;

    /**
     * @var \IO\Services\ItemService
     */
    public $itemService;

    /**
     * @var array
     */
    public $slides = [];


    /**
     * TwigMegaSlider constructor.
     *
     * @param \Plenty\Plugin\Templates\Factories\TwigFactory $twigFactory
     * @param \Plenty\Plugin\ConfigRepository                $configRepository
     * @param \IO\Services\ItemService                       $itemService
     */
    public function __construct( TwigFactory $twigFactory, ConfigRepository $configRepository, ItemService $itemService )
    {
        $this->twig = $twigFactory;
        $this->config = $configRepository;
        $this->itemService = $itemService;

    }


    /**
     * Native TwigBridge method
     *
     * @return string
     */
    public function getName() : string
    {
        return self::NAME_SPACE . "_Extension_TwigMegaSlider";
    }


    /**
     * Native TwigBridge method
     *
     * @return array
     */
    public function getFunctions() : array
    {
        return [
            $this->twig->createSimpleFunction('mega_slider', [$this, 'buildSlides']),
        ];
    }


    /**
     * @return array
     */
    public function buildSlides()
    {

        $images = self::toArray(substr($this->config->get(self::NAME_SPACE . '.megaSliderImages'), 0, -1));
        $titles = self::toArray(substr($this->config->get(self::NAME_SPACE . '.megaSliderTitles'), 0, -1));
        $subtitles = self::toArray(substr($this->config->get(self::NAME_SPACE . '.megaSliderSubTitles'), 0, -1));
        $mobile = self::toArray(substr($this->config->get(self::NAME_SPACE . '.megaSliderMobileURLs'), 0, -1));

        $items = self::toArray(substr($this->config->get(self::NAME_SPACE . '.megaSliderItemIDs'), 0, -1));


        foreach ( $images as $key => $image ) {

            $this->slides[] = [
                'images'    => self::toArray($image, ','),
                'title'     => $titles[$key],
                'subtitles' => $subtitles[$key],
                'mobile'    => $mobile[$key],
                'items'     => $this->getItems($items[$key])
            ];

        }

        return $this->slides;
    }


    /**
     * @param $item
     * @return array
     */
    private function getItems( $item )
    {
        $returnable = [];

        $items = self::toArray($item, ',');

        foreach ( $items as $singleItem ) {

            list($id, $coordinates) = self::toArray($singleItem, '::');
            list($x, $y) = self::toArray($coordinates, '|');

            $returnable[] = [
                'item'        => array_filter($this->itemService->getItem($id), function ( $key )
                {
                    return $key === 'documents';
                }, ARRAY_FILTER_USE_KEY),
                'coordinates' => [
                    'x' => $x,
                    'y' => $y
                ]
            ];
        }

        return $returnable;
    }


    /**
     * @param        $string
     * @param string $delimiter
     * @return array
     */
    private static function toArray( $string, $delimiter = ';' )
    {
        return explode($delimiter, $string);
    }
}
